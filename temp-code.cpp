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
  }
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
