export type AttendanceState = "present" | "absent" | "late" | "excused";

export interface AttendanceRecord {
  readonly studentId: string;
  readonly subjectId: string;
  readonly date: string;
  readonly state: AttendanceState;
}

export interface AttendancePolicy {
  readonly lateCountsAsPresent: boolean;
  readonly excusedCountsInDenominator: boolean;
  readonly minimumAttendancePercentage: number;
}

export const defaultAttendancePolicy: AttendancePolicy = {
  lateCountsAsPresent: true,
  excusedCountsInDenominator: false,
  minimumAttendancePercentage: 75,
};

/** Returns null when no record counts toward the denominator. */
export function attendancePercentage(
  records: readonly AttendanceRecord[],
  policy: AttendancePolicy,
): number | null {
  const counted = records.filter(
    (record) => record.state !== "excused" || policy.excusedCountsInDenominator,
  );
  if (counted.length === 0) return null;

  const attended = counted.filter(
    (record) =>
      record.state === "present" || (record.state === "late" && policy.lateCountsAsPresent),
  ).length;

  return Math.round((attended / counted.length) * 1000) / 10;
}

export function isBelowThreshold(
  records: readonly AttendanceRecord[],
  policy: AttendancePolicy,
): boolean {
  const percentage = attendancePercentage(records, policy);
  if (percentage === null) return false;
  return percentage < policy.minimumAttendancePercentage;
}
