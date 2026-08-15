#pragma once

struct Point {
    float x;
    float y;

    Point(float x_, float y_) : x(x_), y(y_) {}
    Point(int x_, int y_) : x(static_cast<float>(x_)), y(static_cast<float>(y_)) {}
};

struct Line {
    Point begin;
    Point end;
    float length;

    Line(Point begin_, Point end_, float length_)
        : begin(begin_), end(end_), length(length_) {};
};