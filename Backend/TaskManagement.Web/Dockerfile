#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-nanoserver-1809 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-nanoserver-1809 AS build
WORKDIR /src
COPY ["Hahn.ApplicationProcess.February2021.Web/Hahn.ApplicationProcess.February2021.Web.csproj", "Hahn.ApplicationProcess.February2021.Web/"]
COPY ["Hahn.ApplicationProcess.February2021.Data/Hahn.ApplicationProcess.February2021.Data.csproj", "Hahn.ApplicationProcess.February2021.Data/"]
COPY ["Hahn.ApplicationProcess.February2021.Domain/Hahn.ApplicationProcess.February2021.Domain.csproj", "Hahn.ApplicationProcess.February2021.Domain/"]
RUN dotnet restore "Hahn.ApplicationProcess.February2021.Web/Hahn.ApplicationProcess.February2021.Web.csproj"
COPY . .
WORKDIR "/src/Hahn.ApplicationProcess.February2021.Web"
RUN dotnet build "Hahn.ApplicationProcess.February2021.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Hahn.ApplicationProcess.February2021.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Hahn.ApplicationProcess.February2021.Web.dll"]