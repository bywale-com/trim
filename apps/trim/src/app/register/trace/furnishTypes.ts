/**
 * Furnish item shape — supporting UI abilities + written Implementation.
 * Writing pass only; CT plant later.
 */
export type FurnishStatus = "planted" | "deferred";

export type FurnishItem = {
  id: string;
  /** Short list title. */
  label: string;
  /** What they should be able to do (UI functionality). */
  able: string;
  status: FurnishStatus;
  /** Parent CT surface hints when known. */
  surfaceIds: string[];
  implementationProblem: string;
  implementation: string;
  implementationAdds?: string[];
  /** Present when written but not planted in CT. */
  implementationPlant?: "not_done";
};
