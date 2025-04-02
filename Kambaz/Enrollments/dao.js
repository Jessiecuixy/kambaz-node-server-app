import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function enrollCourse(enrollment) {
  const newEnrollment = { _id: uuidv4(), ...enrollment };
  Database.enrollments.push(newEnrollment);
  return newEnrollment;
}

export function unenrollCourse(userId, courseId) {
  Database.enrollments = Database.enrollments.filter(
    (enrollment) =>
      !(enrollment.user === userId && enrollment.course === courseId)
  );
}