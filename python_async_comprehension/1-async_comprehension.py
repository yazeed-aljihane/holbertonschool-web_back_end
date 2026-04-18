#!/usr/bin/env python3
"""Async comprehension module that collects numbers from async generators."""

from importlib import import_module
from typing import List

async_generator = import_module('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Coroutine that collects 10 random numbers using async comprehension
    syntax over async_generator and returns them as a list.
    
    Returns:
        List[float]: A list of 10 random numbers from async_generator.
    """
    return [i async for i in async_generator()]
