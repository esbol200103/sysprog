#include <iostream>
#include <jsoncpp/json/value.h>
#include <jsoncpp/json/json.h>
#include <fstream>
#include <string>

using namespace std;

int main(){

    ifstream file('weather.json');
    Json::Value actualJson;
    Json::Reader reader;
    reader.parse(file, actualJson);


}
