#!/usr/bin/env python3
"""Module to measure the runtime of async operations."""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Coroutine that executes async_comprehension four times in parallel
    using asyncio.gather and measures the total runtime.

    The total runtime i roughly 10 seconds because all four async_comprehension
    calls run concurrently. Each async_comprehension takes 10 seconds
    (10 iterations × 1 second sleep), but since they run in parallel,
    the total time is approximately the duration of one call (10 seconds)
    rather than four times that (40 seconds).

    Returns:
        float: The total runtime in seconds.
    """
    start_time = time.time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end_time = time.time()
    return end_time - start_time
