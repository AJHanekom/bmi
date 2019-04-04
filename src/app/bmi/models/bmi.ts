export interface Bmi {
  status: "start" | "complete";
  metrics: {
    height: number;
    weight: number;
    bmi: number;
  };
  imperials: {
    height: number;
    weight: number;
    bmi: number;
  };
}
