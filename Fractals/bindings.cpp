#include <emscripten/bind.h>

#include "tree-fractal/tree.h"

using namespace emscripten;

EMSCRIPTEN_BINDINGS(fractal_module) {
    value_object<Point>("Point")
    .field("x", &Point::x)
    .field("y", &Point::y);

    value_object<Line>("Line")
    .field("begin", &Line::begin)
    .field("end", &Line::end)
    .field("length", &Line::length);

    register_vector<Line>("LineVector");

    function("treeSimulate", &tree::simulate);
}