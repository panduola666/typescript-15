/**
 * 任務：實作一個函式 `classifyAge`，根據年齡進行分類。
 *
 * 範例：
 * classifyAge(10) 應該回傳 "Child"
 * classifyAge(15) 應該回傳 "Teenager"
 * classifyAge(30) 應該回傳 "Adult"
 * classifyAge(70) 應該回傳 "Senior"
 *
 * @param age - 一個需要被分類的年齡
 * @returns - 回傳年齡的分類結果
 */
export enum Age {
    Child,
    Teenager,
    Adult,
    Senior
}
export function classifyAge(age: number): string {
    // 請在此處寫下你的程式碼
    if(Number(age) <= 10) {
        return Age[0]
    } else if (Number(age) <= 15) {
        return Age[1]
    } else if (Number(age) <= 30) {
        return Age[2]
    } else {
        return Age[3]
    }
}

