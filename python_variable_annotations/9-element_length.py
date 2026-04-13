#!/usr/bin/env python3
"""Define typed utility function for getting the length of list of strings."""
from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    return [(i, len(i)) for i in lst]
