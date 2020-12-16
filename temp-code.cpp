#include <stdio.h>
#include <string.h>

int len, ze, i = 1;
char s[10];

char Trs(char a) {
  return a - '0' + 'a';
}

int main() {
  scanf("%s", s + 1);
  len = strlen(s + 1);
  if (len == 1 && s[1] == '0') {
    printf("a\n");
    return 0;
  }
  if (len == 2 && s[1] == '1') {
    printf("S");
    if (s[2] != '0') {
      printf("%c", Trs(s[2]));
    }
    printf("\n");
    return 0;
  }https://iwx.mail.qq.com/ftn/download?func=3&key=c7cc0d636717e739f5bf4a6363373265e9025b63613732651d1c0550575104565b054905005351480c5153514c55015d0e1e5d5654565650590a0205020f2a65795d050f41031280978f82f6d11f034c670654554f4756032c0acb5a66cb633f8912ba49c350ce8b02f223a4f3&code=83dca72e&k=c7cc0d636717e739f5bf4a6363373265e9025b63613732651d1c0550575104565b054905005351480c5153514c55015d0e1e5d5654565650590a0205020f2a65795d050f41031280978f82f6d11f034c670654554f4756032c0acb5a66cb633f8912ba49c350ce8b02f223a4f3
  if (len == 9) {
    printf("%cY", Trs(s[1]));
    i = 2;
  }
  for (int k; i <= len; ++i) {
    if (s[i] == '0') {
      ++ze;
    } else {
      if (ze) {
        printf("a");
        ze = 0;
      }
      printf("%c", Trs(s[i]));
      k = (len - i) % 4 + 1;
      if (k == 2) {
        printf("S");
      } else if (k == 3) {
        printf("B");
      } else if (k == 4) {
        printf("Q");
      }
    }
    if (len - i == 4) {
      printf("W");
    }
  }
  printf("\n");
  return 0;
}
