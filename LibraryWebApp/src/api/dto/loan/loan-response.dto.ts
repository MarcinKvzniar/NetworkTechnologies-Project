import { BookResponseDto } from '../book/book-response.dto';
import { UserDto } from '../user/user.dto';

export class LoanResponseDto {
  id!: number;
  loanDate!: string;
  dueDate!: string;
  returnDate!: string;
  user!: UserDto[];
  book!: BookResponseDto;
}
