import { memo } from 'react';

export interface TestRerenderChildProps {
	value: object;
	onClick: () => void;
}

export const TestRerenderChild = memo(function ({
	value,
	onClick,
}: TestRerenderChildProps) {
	console.log(`[TestRerenderChild] render: ${value}, ${onClick}`);
	return <div>TestRerenderChild</div>;
});
