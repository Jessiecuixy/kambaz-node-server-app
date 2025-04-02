import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments", (req, res) => {
    const enrollment = req.body;
    const newEnrollment = enrollmentsDao.enrollCourse(enrollment);
    res.json(newEnrollment);
  });

  app.delete("/api/enrollments", (req, res) => {
    const { user, course } = req.body;
    enrollmentsDao.unenrollCourse(user, course);
    res.sendStatus(204); 
  });
}
