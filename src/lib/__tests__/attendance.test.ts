import { describe, expect, it } from "vitest";
import {
  attendancePercentage,
  defaultAttendancePolicy,
  isBelowThreshold,
  type AttendanceRecord,
  type AttendanceState,
} from "../attendance";

const record = (state: AttendanceState, i: number): AttendanceRecord => ({
  studentId: "s1",
  subjectId: "cs101",
  date: `2026-03-${String(i + 1).padStart(2, "0")}`,
  state,
});

const build = (states: AttendanceState[]) => states.map(record);

describe("attendance", () => {
  it("returns null with an empty denominator", () => {
    expect(attendancePercentage([], defaultAttendancePolicy)).toBeNull();
    expect(attendancePercentage(build(["excused"]), defaultAttendancePolicy)).toBeNull();
  });

  it("counts late as present under the default policy", () => {
    expect(attendancePercentage(build(["present", "late"]), defaultAttendancePolicy)).toBe(100);
  });

  it("honours a stricter late policy", () => {
    expect(
      attendancePercentage(build(["present", "late"]), {
        ...defaultAttendancePolicy,
        lateCountsAsPresent: false,
      }),
    ).toBe(50);
  });

  it("includes excused records when the policy says so", () => {
    expect(
      attendancePercentage(build(["present", "excused"]), {
        ...defaultAttendancePolicy,
        excusedCountsInDenominator: true,
      }),
    ).toBe(50);
  });

  it("flags records below the minimum threshold", () => {
    expect(isBelowThreshold(build(["present", "absent"]), defaultAttendancePolicy)).toBe(true);
    expect(
      isBelowThreshold(build(["present", "present", "present", "absent"]), defaultAttendancePolicy),
    ).toBe(false);
    expect(isBelowThreshold([], defaultAttendancePolicy)).toBe(false);
  });
});
