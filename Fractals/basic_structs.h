#pragma once

#include <SFML/Graphics.hpp>

struct Point {
    float x;
    float y;

    Point(float x_, float y_) : x(x_), y(y_) {}
    Point(int x_, int y_) : x(static_cast<float>(x_)), y(static_cast<float>(y_)) {}

    sf::Vector2f to_sfvector() {return sf::Vector2f(x, y);}
};

Point to_point(sf::Vector2f vector) {return Point(vector.x, vector.y);}

struct Line {
    Point begin;
    Point end;
    float length;

    Line(Point begin_, Point end_, float length_)
        : begin(begin_), end(end_), length(length_) {};
};