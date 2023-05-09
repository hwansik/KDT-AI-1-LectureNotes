package kr.eddi.demo.lectureClass.testCode.lecture.service;

import kr.eddi.demo.lectureClass.testCode.lecture.entity.TestLecture;
import kr.eddi.demo.lectureClass.testCode.lecture.repository.TestLectureRepository;
import kr.eddi.demo.lectureClass.testCode.student.entity.TestStudent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class TestLectureServiceImpl implements TestLectureService {

    final private TestLectureRepository lectureRepository;
    final private TestStudentRepository studentRepository;

    @Override
    public TestLecture register(String subject, Long studentId) {
        final TestLecture testLecture = new TestLecture(subject);
        lectureRepository.save(testLecture);

        final Optional<TestStudent> maybeStudent = studentRepository.findById(studentId);

        if (maybeStudent.isEmpty()) {
            System.out.println("존재하지 않는 학생입니다!");
            return null;
        }

        final TestStudent testStudent = maybeStudent.get();
        testStudent.setTestLecture(testLecture);
        studentRepository.save(testStudent);

        return testLecture;
    }
}