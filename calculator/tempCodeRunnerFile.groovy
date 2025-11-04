#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

string convertInfix(string infix) {
    infix.erase(remove(infix.begin(), infix.end(), ' '), infix.end()); // trim spaces
    vector<char> postfix;
    vector<char> operators;

    for (char value : infix) {
        if (isdigit(value)) {
            postfix.push_back(value);
        }
        else if (value == '(') {
            operators.push_back(value);
        }
        else if (value == ')') {
            while (!operators.empty() && operators.back() != '(') {
                postfix.push_back(operators.back());
                operators.pop_back();
            }
            if (!operators.empty() && operators.back() == '(') {
                operators.pop_back();
            }
        }
        else if (value == '^' || value == '*' || value == '/' || value == '+' || value == '-') {
            // TODO: add precedence handling later
            operators.push_back(value);
        }
    }

    // ✅ Pop remaining operators after parsing
    while (!operators.empty()) {
        postfix.push_back(operators.back());
        operators.pop_back();
    }

    return string(postfix.begin(), postfix.end());
}

int main () {
    string expression = "8 * 4 - ( 7 + 5 ) + 3";
    cout << convertInfix(expression);
    return 0;
}
