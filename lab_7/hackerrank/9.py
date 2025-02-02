if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()

    res = 0
    for i in student_marks[query_name]:
        res += i
    
    print("{0:.2f}".format(res / len(student_marks[query_name])))