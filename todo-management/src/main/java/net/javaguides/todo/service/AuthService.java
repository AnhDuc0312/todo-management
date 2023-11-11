package net.javaguides.todo.service;
import net.javaguides.todo.dto.*;

public interface AuthService {
    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
}
