// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('phone_valid1', () => {
  expect(isPhoneNumber('(408)-872-2899')).toBe(true);
});

test('phone_valid2', () => {
  expect(isPhoneNumber('(656)-969-4420')).toBe(true);
});

test('phone_invalid1', () => {
  expect(isPhoneNumber('65')).toBe(false);
});

test('phone_invalid2', () => {
  expect(isPhoneNumber(8921)).toBe(false);
});


test('email_valid1', () => {
  expect(isEmail('someguy@somedomain.com')).toBe(true);
});

test('email_valid2', () => {
  expect(isEmail('anotherguy@anotherdomain.com')).toBe(true);
});

test('email_invalid1', () => {
  expect(isEmail('someguy@somedomain.oopsie')).toBe(false);
});

test('email_valid2', () => {
  expect(isEmail('someguywithoutdomain.com')).toBe(false);
});


test('goodpassword1', () => {
  expect(isStrongPassword('e4whwrohw_wfw')).toBe(true);
});

test('goodpassword2', () => {
  expect(isStrongPassword('password_nnW')).toBe(true);
});

test('badpassword1', () => {
  expect(isStrongPassword('p')).toBe(false);
});

test('badpassword2', () => {
  expect(isStrongPassword('!password1!')).toBe(false);
});


test('valid_date1', () => {
  expect(isDate('12/24/2332')).toBe(true);
});

test('valid_date2', () => {
  expect(isDate('02/17/1976')).toBe(true);
});

test('invalid_date1', () => {
  expect(isDate('12/26')).toBe(false);
});

test('invalid_date2', () => {
  expect(isDate('january third')).toBe(false);
});


test('valid_color1', () => {
  expect(isHexColor('#45fc03')).toBe(true);
});

test('valid_color2', () => {
  expect(isHexColor('#1a2b3c')).toBe(true);
});

test('invalid_color1', () => {
  expect(isHexColor('#45fc')).toBe(false);
});

test('invalid_color2', () => {
  expect(isHexColor('#03')).toBe(false);
});