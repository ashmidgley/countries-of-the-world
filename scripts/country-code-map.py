#!/usr/bin/env python3

def main():
    filename = "country-codes.json"
    with open(filename) as f:
        codes = f.readlines()
    codes = codes[1:-1]
    dict = codes_to_dictionary(codes);
    print(dict)

def codes_to_dictionary(codes):
    dict = {};
    for x in codes:
        line = x.strip().split('"')
        key = line[3]
        value = line[1].lower()
        dict[key] = value
    return dict;

if __name__ == "__main__":
    main()
