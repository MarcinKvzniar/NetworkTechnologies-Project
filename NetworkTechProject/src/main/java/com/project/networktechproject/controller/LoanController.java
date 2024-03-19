package com.project.networktechproject.controller;

import com.project.networktechproject.controller.dto.loan.LoanDto;
import com.project.networktechproject.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/loans")
public class LoanController {

    private final LoanService loanService;

    @Autowired
    public LoanController(LoanService loanService) {
        this.loanService = loanService;
    }

    @PostMapping(path = "/add")
    public String addNewLoan(@RequestBody LoanDto loanDTO) {
        loanService.saveLoan(loanDTO);
        return "Saved";
    }

    @GetMapping
    public List<LoanDto> getAllLoans() {
        return loanService.getAllLoans();
    }
}

