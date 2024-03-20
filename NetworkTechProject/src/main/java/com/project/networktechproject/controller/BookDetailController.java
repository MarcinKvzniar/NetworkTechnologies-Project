package com.project.networktechproject.controller;

import com.project.networktechproject.controller.dto.bookDetail.GetBookDetailDto;
import com.project.networktechproject.service.BookDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/book-details")
public class BookDetailController {

    private final BookDetailService bookDetailService;

    @Autowired
    public BookDetailController(BookDetailService bookDetailService) {
        this.bookDetailService = bookDetailService;
    }

    @PostMapping(path = "/add")
    public String addNewBookDetail(@RequestBody GetBookDetailDto getBookDetailDTO) {
        bookDetailService.saveBookDetail(getBookDetailDTO);
        return "Saved";
    }

    @GetMapping
    public List<GetBookDetailDto> getAllBookDetails() {
        return bookDetailService.getAllBookDetails();
    }
}
