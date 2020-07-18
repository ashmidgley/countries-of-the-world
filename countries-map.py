#!/usr/bin/env python3

def countries_to_list(countries):
    return [x.strip().lower() for x in countries] 

def countries_to_dictionary(countries):
    dict = {};
    for x in countries:
        dict[x.strip().lower()] = x.strip()
    return dict

if __name__ == "__main__":
    filename = "countries.txt"
    with open(filename) as f:
        countries = f.readlines()
    country_list = countries_to_list(countries)
    country_dict = countries_to_dictionary(countries)
    print(country_list)
    print(country_dict)

