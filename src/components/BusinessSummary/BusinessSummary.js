import {
  ChartBarIcon,
  ReceiptTaxIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import React from "react";

const BusinessSummary = () => {
  return (
    <div className="lg:my-28 my-16 max-w-[1100px] mx-auto px-2">
      <h2 className="section-header text-start text-4xl font-bold text-secondary">
        Business Summary
      </h2>
      <div class="stats shadow md:my-28 my-14 flex flex-col lg:flex-row justify-center">
        <div class="stat">
          <div class="stat-figure text-secondary">
            <UserGroupIcon className="h-8 text-secondary" />
          </div>
          <div class="stat-title">Served Customer</div>
          <div class="stat-value">31+</div>
          <div class="stat-desc">Yearly</div>
        </div>
        <div class="stat">
          <div class="stat-figure text-secondary">
            <ChartBarIcon className="h-8 text-secondary" />
          </div>
          <div class="stat-title">Revenue</div>
          <div class="stat-value">120M+</div>
          <div class="stat-desc">Annual</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <SparklesIcon className="h-8 text-secondary" />
          </div>
          <div class="stat-title">Reviews</div>
          <div class="stat-value">33k</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <ReceiptTaxIcon className="h-8 text-secondary" />
          </div>
          <div class="stat-title">Tools</div>
          <div class="stat-value">50+</div>
          <div class="stat-desc">↘ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
