# 벡터, 행렬, tensor의 기본 개념

import numpy as np

vector1 = np.array(list(range(1, 111)))
print(vector1)

vector1 = np.arange(1, 11)
print(vector1)

matrix1 = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
])
print(matrix1)

matrix1 = np.matrix([
    list(range(1, 4)),
    list(range(4, 7)),
    list(range(7, 10)),
    list(range(10, 13)),
])

print(matrix1)
print(matrix1.shape)

tensor1 = np.array([
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12],
    ],
])

print(tensor1)
print(tensor1.shape) # (2, 2, 3)
# 맨 앞에가 리스트 개수
# 그 다음은 행, 열 개수