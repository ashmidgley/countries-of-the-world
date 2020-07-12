#!/usr/bin/env python3

if __name__ == "__main__":
    filename = "countries.txt"
    with open(filename) as f:
        countries = f.readlines()
        countries = [x.strip().lower() for x in countries] 
    print(countries)
    print(f"Count: {len(countries)}")

