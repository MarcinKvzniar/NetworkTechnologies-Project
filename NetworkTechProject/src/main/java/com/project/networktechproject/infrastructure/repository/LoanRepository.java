package com.project.networktechproject.infrastructure.repository;

import com.project.networktechproject.infrastructure.entity.BookEntity;
import com.project.networktechproject.infrastructure.entity.LoanEntity;
import com.project.networktechproject.infrastructure.entity.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LoanRepository extends JpaRepository<LoanEntity, Long> {
    Optional<LoanEntity> findByBookIdAndUserId(Long bookId, Long userId);

    List<LoanEntity> findByUserId(long userId);
    Page<LoanEntity> findByUserId(long userId, Pageable pageable);

    List<LoanEntity> findByBookId(long bookId);
}
