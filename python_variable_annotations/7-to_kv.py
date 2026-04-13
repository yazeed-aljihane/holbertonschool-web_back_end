#!/usr/bin/env python3
"""Define a typed utility function for concatenating two strings."""
from typing import Tuple


def to_kv(k: str, v: int) -> Tuple[str, int]:
    """Return a tuple of the key and value."""
    return (k, v)
