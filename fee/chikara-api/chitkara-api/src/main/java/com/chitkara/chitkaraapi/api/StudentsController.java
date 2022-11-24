package com.chitkara.chitkaraapi.api;


import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.chitkara.chitkaraapi.dto.Student;
import com.chitkara.chitkaraapi.repo.StudentRepo;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentsController extends BaseController {

    @Autowired
    private StudentRepo repo;
    
    @PostMapping(path = "/save",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Student> save(@RequestBody Student stu){
        System.out.println(stu.toString());
        repo.save(stu);
        return ResponseEntity.ok(stu);
    }
}
