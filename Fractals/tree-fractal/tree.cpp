#include "tree.h"
#include "basic_structs.h"

std::vector<Line> tree::iterate(float scaling, const std::vector<Line>& previous_line_vector, std::vector<Line>& all_line_vector) {
    std::vector<Line> new_line_vector = {};
    for (const Line& line : previous_line_vector) {
        Line hor_line(
            {line.end.x - line.length / 2.0f, line.end.y}, 
            {line.end.x + line.length / 2.0f, line.end.y}, 
            line.length);
        all_line_vector.push_back(hor_line);

        Line l_vert_line(
            hor_line.begin,
            {hor_line.begin.x, hor_line.begin.y - line.length * scaling},
            line.length * scaling);
        all_line_vector.push_back(l_vert_line);
        new_line_vector.push_back(l_vert_line);

        Line r_vert_line(
            hor_line.end,
            {hor_line.end.x, hor_line.end.y - line.length * scaling},
            line.length * scaling);
        all_line_vector.push_back(r_vert_line);
        new_line_vector.push_back(r_vert_line);
    }
    return new_line_vector;
};


std::vector<Line> tree::simulate(int iterations, float window_height, float scaling) {
    std::vector<Line> all_line_vector = {
        Line({0.f, window_height / 2.0f}, {0.f, 0.f}, window_height / 2.0f)
    };
    std::vector<Line> previous_line_vector = all_line_vector;

    for (int i = 0; i < iterations; i++) {
        previous_line_vector = tree::iterate(scaling, previous_line_vector, all_line_vector);
    }

    return all_line_vector;
};