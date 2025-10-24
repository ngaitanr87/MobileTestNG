#!/bin/bash

# Layer isolation validation script
echo "🔍 Validating Clean Architecture layer isolation..."

# Check domain layer imports
echo "Checking Domain layer..."
if grep -r "from ['\"]@application\|from ['\"]@data-\|from ['\"]@infra\|from ['\"]@presentation\|from ['\"]@di" packages/domain/src/; then
  echo "❌ Domain layer contains forbidden imports"
  exit 1
fi

# Check application layer imports (can use data layers now)
echo "Checking Application layer..."
if grep -r "from ['\"]@infra\|from ['\"]@presentation\|from ['\"]@di" packages/application/src/; then
  echo "❌ Application layer contains forbidden imports"
  exit 1
fi

# Check data layer imports
echo "Checking Data layers..."
if grep -r "from ['\"]@application\|from ['\"]@infra\|from ['\"]@presentation\|from ['\"]@di" packages/data-*/src/; then
  echo "❌ Data layers contain forbidden imports"
  exit 1
fi

# Check infrastructure layer imports (can use data layers now)
echo "Checking Infrastructure layers..."
if grep -r "from ['\"]@application\|from ['\"]@presentation\|from ['\"]@di" packages/infra-*/src/; then
  echo "❌ Infrastructure layers contain forbidden imports"
  exit 1
fi

# Check presentation layer imports
echo "Checking Presentation layers..."
if grep -r "from ['\"]@domain\|from ['\"]@data-\|from ['\"]@infra\|from ['\"]@di" packages/presentation-*/src/; then
  echo "❌ Presentation layers contain forbidden imports"
  exit 1
fi

echo "✅ All layer isolation rules validated successfully!"
