if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    unique = [*set(arr)]
    unique.sort()
    print(unique[-2])