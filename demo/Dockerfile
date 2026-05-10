FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Install Maven
RUN apk add --no-cache maven

# Copy full project
COPY . .

# Build JAR
RUN mvn clean package -DskipTests

# Run jar
ENTRYPOINT ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]