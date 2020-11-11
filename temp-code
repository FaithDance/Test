#include <stdio.h>

int main() {
  char op = ',', ch;
  int num = 0, a = 0;
  for (; ch != '=';) {
    ch = getchar();
    if (ch < '0' || ch > '9') {
      if (op == ',') {
        a = num;
      } else if (op == '+') {
        a = a + num;
      } else if (op == '-') {
        a = a - num;
      } else if (op == '*') {
        a = a * num;
      } else if (op == '/') {
        if (num == 0) {
          printf("ERROR\n");
          return 0;
        }
        a = a / num;
      } else {
        printf("ERROR\n");
        return 0;
      }
      num = 0;
      op = ch;
    } else {
      num = num * 10 + ch - '0';
    }
  }
  printf("%d\n", a);
  
  return 0;
}
