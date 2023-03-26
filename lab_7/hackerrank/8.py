if __name__ == '__main__':
    scores = []
    names = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        scores.append(score)
        names.append(name)

    unique = [*set(scores)]
    unique.sort()

    ans = []
    for i in range(len(scores)):
        if scores[i] == unique[1]:
            ans.append(names[i])
    ans.sort()
    for i in ans:
        print(i)
