#!/usr/bin/env python3
"""Define a typed utility function for building typed key-value tuples."""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple of the key and value."""
    return (k, float(v))
