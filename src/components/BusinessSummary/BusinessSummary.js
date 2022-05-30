import {
  ChartBarIcon,
  ReceiptTaxIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import React from "react";

const BusinessSummary = () => {
  // this is  businessSummary
  return (
    <div className="lg:my-28 my-16 max-w-[1100px] mx-auto px-2">
      <h2 className="section-header text-start text-4xl font-bold text-secondary">
        Business Summary
      </h2>
      <div className="stats shadow md:my-28 my-14 flex flex-col lg:flex-row justify-center">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <UserGroupIcon className="h-8 text-secondary" />
          </div>
          <div className="stat-title">Served Customer</div>
          <div className="stat-value">31+</div>
          <div className="stat-desc">Yearly</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <ChartBarIcon className="h-8 text-secondary" />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">120M+</div>
          <div className="stat-desc">Annual</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <SparklesIcon className="h-8 text-secondary" />
          </div>
          <div className="stat-title">Reviews</div>
          <div className="stat-value">33k</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <ReceiptTaxIcon className="h-8 text-secondary" />
          </div>
          <div className="stat-title">Tools</div>
          <div className="stat-value">50+</div>
          <div className="stat-desc">↘ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
