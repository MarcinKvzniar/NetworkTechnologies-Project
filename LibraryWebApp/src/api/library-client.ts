import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { LoginRequestDto } from './dto/auth/login-request.dto';
import { LoginResponseDto } from './dto/auth/login-response.dto';
import { BooksPageDto } from './dto/book/books-page-response.dto';
import { LoansPageDto } from './dto/loan/loans-page-response.dto';
import { BookDetailsDto } from './dto/book-details/book-details.dto';
import { jwtDecode } from 'jwt-decode';
import { RegisterRequestDto } from './dto/auth/register-request.dto';
import { RegisterResponseDto } from './dto/auth/register-response.dto';

type ClientResponse<T> = {
  success: boolean;
  data: T;
  status: number;
};

export class LibraryClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:8080/api',
    });
  }

  public getUserRole(): string | null {
    const token = this.client.defaults.headers.common[
      'Authorization'
    ] as string;
    console.log(this.client.defaults.headers.common['Authorization']);

    if (!token) {
      return null;
    }

    const decodedToken: any = jwtDecode(token.split(' ')[1]);
    console.log(decodedToken);
    return decodedToken.role || null;
  }

  public async login(
    data: LoginRequestDto,
  ): Promise<ClientResponse<LoginResponseDto | null>> {
    try {
      const response: AxiosResponse<LoginResponseDto> = await this.client.post(
        '/auth/login',
        data,
      );

      this.client.defaults.headers.common['Authorization'] =
        `Bearer ${response.data.token}`;

      return {
        success: true,
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;

      return {
        success: false,
        data: null,
        status: axiosError.response?.status || 0,
      };
    }
  }

  public async registerUser(
    data: RegisterRequestDto,
  ): Promise<ClientResponse<RegisterResponseDto | null>> {
    try {
      const response: AxiosResponse<RegisterResponseDto> =
        await this.client.post('/auth/register', data);

      return {
        success: true,
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;

      return {
        success: false,
        data: null,
        status: axiosError.response?.status || 0,
      };
    }
  }

  public async getBooks(
    page: number,
  ): Promise<ClientResponse<BooksPageDto | null>> {
    try {
      const url = `/books?page=${page}`;
      const response = await this.client.get(url);

      return {
        success: true,
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;

      return {
        success: false,
        data: null,
        status: axiosError.response?.status || 0,
      };
    }
  }

  public async getLoans(
    page: number,
  ): Promise<ClientResponse<LoansPageDto | null>> {
    try {
      const url = `/loans?page=${page}`;
      const response = await this.client.get(url);

      return {
        success: true,
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;

      return {
        success: false,
        data: null,
        status: axiosError.response?.status || 0,
      };
    }
  }

  public async getBookDetailsByTitle(
    title: string,
  ): Promise<ClientResponse<BookDetailsDto | null>> {
    try {
      const url = `/books/details/title/${title}`;
      const response = await this.client.get(url);

      return {
        success: true,
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;

      return {
        success: false,
        data: null,
        status: axiosError.response?.status || 0,
      };
    }
  }

  public async getBookDetailsByIsbn(
    isbn: string,
  ): Promise<ClientResponse<BookDetailsDto | null>> {
    try {
      const url = `/books/details/isbn/${isbn}`;
      const response = await this.client.get(url);

      return {
        success: true,
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;

      return {
        success: false,
        data: null,
        status: axiosError.response?.status || 0,
      };
    }
  }
}