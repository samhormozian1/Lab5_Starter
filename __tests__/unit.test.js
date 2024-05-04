import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('valid phone numbers', () => {
    expect(isPhoneNumber("123-456-7890")).toBe(true);
    expect(isPhoneNumber("(456) 789-0123")).toBe(true);
  });
  test('valid phone numbers', () => {
    expect(isPhoneNumber("321-654-0987")).toBe(true);
    expect(isPhoneNumber("(456) 789-0123")).toBe(true);
  });

  test('invalid phone numbers', () => {
    expect(isPhoneNumber("1234567890")).toBe(false);
    expect(isPhoneNumber("1234567890")).toBe(false);
  });
  test('invalid phone numbers', () => {
    expect(isPhoneNumber("sdfdsfd")).toBe(false);
    expect(isPhoneNumber("sdfdsfd")).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid emails', () => {
    expect(isEmail("example@email.com")).toBe(true);
    expect(isEmail("user123@example.com")).toBe(true);
  });
  test('valid emails', () => {
    expect(isEmail("sam@gmail.com")).toBe(true);
    expect(isEmail("sam@gmail.com")).toBe(true);
  });

  test('invalid emails', () => {
    expect(isEmail("notAnEmail.com")).toBe(false);
    expect(isEmail("invalid@domain")).toBe(false);
  });
  test('invalid emails', () => {
    expect(isEmail("fadsadsfjdsfa.com")).toBe(false);
    expect(isEmail("sam@hormozian")).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('strong passwords', () => {
    expect(isStrongPassword("Password")).toBe(true);
    expect(isStrongPassword("User_123")).toBe(true);
  });
  test('strong passwords', () => {
    expect(isStrongPassword("fdadafdfa")).toBe(true);
    expect(isStrongPassword("afdsfadf")).toBe(true);
  });

  test('weak passwords', () => {
    expect(isStrongPassword("1eak")).toBe(false);
    expect(isStrongPassword("1")).toBe(false);
  });
  test('weak passwords', () => {
    expect(isStrongPassword("@@@@")).toBe(false);
    expect(isStrongPassword("@@@")).toBe(false);
  });
});

describe('isDate', () => {
  test('valid dates', () => {
    expect(isDate("12/31/2023")).toBe(true);
    expect(isDate("1/2/2024")).toBe(true);
  });
  test('valid dates', () => {
    expect(isDate("11/30/2022")).toBe(true);
    expect(isDate("11/30/2022")).toBe(true);
  });

  test('invalid dates', () => {
    expect(isDate("310/12/2023")).toBe(false);
    expect(isDate("120/31/23")).toBe(false);
  });
  test('invalid dates', () => {
    expect(isDate("31/121/2023")).toBe(false);
    expect(isDate("12/311/23")).toBe(false);
  });
});

describe('isHexColor', () => {
  test('valid hex colors', () => {
    expect(isHexColor("#ff0000")).toBe(true);
    expect(isHexColor("#ff0000")).toBe(true);
  });
  test('valid hex colors', () => {
    expect(isHexColor("#000000")).toBe(true);
    expect(isHexColor("#000000")).toBe(true);
  });

  test('invalid hex colors', () => {
    expect(isHexColor("#1234567")).toBe(false);
    expect(isHexColor("notAColor")).toBe(false);
  });
  test('invalid hex colors', () => {
    expect(isHexColor("3242342")).toBe(false);
    expect(isHexColor("numbers")).toBe(false);
  });
});
