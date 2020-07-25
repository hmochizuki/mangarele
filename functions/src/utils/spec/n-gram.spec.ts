import { bigram, trigram } from "../n-gram";

describe("Get n-grams", () => {
  describe("Bigram", () => {
    it("should be devided successfully", () => {
      const text = "とんがり帽子のアトリエ";
      const result = bigram(text);
      expect(result).toEqual([
        "とん",
        "んが",
        "がり",
        "り帽",
        "帽子",
        "子の",
        "のア",
        "アト",
        "トリ",
        "リエ",
      ]);
    });
  });

  describe("Trigram", () => {
    it("should be devided successfully", () => {
      const text = "とんがり帽子のアトリエ";
      const result = trigram(text);
      expect(result).toEqual([
        "とんが",
        "んがり",
        "がり帽",
        "り帽子",
        "帽子の",
        "子のア",
        "のアト",
        "アトリ",
        "トリエ",
      ]);
    });
  });
});
