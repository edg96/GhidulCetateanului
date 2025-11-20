import {
  Landmark,
  Vote,
  Briefcase,
  ShieldCheck,
  Gavel,
  Building,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const iconComponents: Record<string, LucideIcon> = {
  Landmark,
  Vote,
  Briefcase,
  ShieldCheck,
  Gavel,
  Building,
  Shield,
};

export const categoriesIcons: Record<string, string> = {
  constitutional_institutions: "Landmark",
  election_and_democracy_institutions: "Vote",
  executive_branch: "Briefcase",
  independent_authorities_and_agencies: "ShieldCheck",
  judiciary_and_oversight: "Gavel",
  ministries: "Building",
  security_and_defense_institutions: "Shield",
};
