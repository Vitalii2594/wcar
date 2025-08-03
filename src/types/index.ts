export interface Service {
  title: string;
  price: string;
  features: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface InspectionStep {
  number: string;
  title: string;
  description: string;
}

export interface CheckItem {
  title: string;
  description: string;
  icon: string;
}

export type Language = 'pl' | 'uk' | 'ru';