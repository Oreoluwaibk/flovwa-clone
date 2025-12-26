

export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) return `${minutesAgo} min ago`;
  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 7) return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
  const weeksAgo = Math.floor(daysAgo / 7);
  if (weeksAgo < 4) return `${weeksAgo} week${weeksAgo > 1 ? 's' : ''} ago`;
  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12) return `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
  const yearsAgo = Math.floor(daysAgo / 365);
  return `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
}



export interface ScheduleItem {
  id: string;
  serviceWorkerId: string;
  dayOfWeek: string;
  scheduleDate: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  notes: string;
  createdAt: string;
}

export interface GroupedSchedule {
  dayOfWeek: string;
  startTime: string[];
  endTime: string[];
  isAvailable: boolean[];
  id: string[];
  scheduleDate: string[];
}

export function groupSchedulesByDay(schedules: ScheduleItem[]): GroupedSchedule[] {
  const grouped: Record<
    string,
    { startTime: string[]; endTime: string[]; isAvailable: boolean[]; id: string[]; scheduleDate: string[];}
  > = {};

  // Group by dayOfWeek
  for (const schedule of schedules) {
    const day = schedule.dayOfWeek;

    if (!grouped[day]) {
      grouped[day] = { startTime: [], endTime: [], isAvailable: [], id: [], scheduleDate: [] };
    }

    grouped[day].startTime.push(schedule.startTime);
    grouped[day].endTime.push(schedule.endTime);
    grouped[day].isAvailable.push(schedule.isAvailable);
    grouped[day].id.push(schedule.id);
    grouped[day].scheduleDate.push(schedule.scheduleDate);
  }

  // Define order of days
  const dayOrder = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Convert grouped object to array and sort by day order
  return Object.entries(grouped)
    .map(([dayOfWeek, data]) => ({
      dayOfWeek,
      startTime: data.startTime,
      endTime: data.endTime,
      isAvailable: data.isAvailable,
      id: data.id,
      scheduleDate: data.scheduleDate
    }))
    .sort(
      (a, b) => dayOrder.indexOf(a.dayOfWeek) - dayOrder.indexOf(b.dayOfWeek)
    );
}


