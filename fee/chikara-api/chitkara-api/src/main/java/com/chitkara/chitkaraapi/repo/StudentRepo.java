package com.chitkara.chitkaraapi.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chitkara.chitkaraapi.dto.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student,Integer> {
    
}
