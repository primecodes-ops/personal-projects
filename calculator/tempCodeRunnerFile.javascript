#include <iostream>
#include <vector> // vector stacks
#include <cctype> // isDigit
using namespace std;

string convertInfix(string infix) {
    vector<char> result;
    vector<char> operators;

    infix.erase(remove(infix.begin(), infix.end(), ' '));

    for (char value : infix) {
        if (isdigit(value)) {
            result.push_back(value);
        }
        else if (value == '(') {
            operators.push_back(value);
        }
        else if (value == ')') {
            while (!operators.empty() && operators.back() != '(') {
                result.push_back(operators.back());
                operators.pop_back();
            }
            if (!operators.empty() && operators.back() == '(') {
                operators.pop_back();
            }
        }
        else if (value == '*' || value == '/' || value == '+' || value == '-' || value == '^') {
            if (!operators.empty() && operators.back() != '(') {
                result.push_back(operators.back());
                operators.pop_back();
            }
            operators.push_back(value);
        }
    }
    while (!operators.empty()) {
        result.push_back(operators.back());
        operators.pop_back();
    }
    return string(result.begin(), result.end());
}

int main () {
    string expression = "8 * 4 - ( 7 + 5 ) + 3";
    cout << convertInfix(expression) << "\n";
    return 0;
}