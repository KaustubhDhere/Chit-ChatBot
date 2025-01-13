package com.ai.gemini_chat.controller;

import com.ai.gemini_chat.service.QnaSerivce;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/qna")
public class AIController {


  private final QnaSerivce qnaSerivce;

  @PostMapping("/ask")
    public ResponseEntity<String> askQuestion(@RequestBody Map<String,String> payload){
           String question=payload.get("question");
           String answer=qnaSerivce.getAnswer(question);

           return ResponseEntity.ok(answer);

    }














}
