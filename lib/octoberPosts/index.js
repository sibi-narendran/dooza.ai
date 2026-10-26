// October 2026 search-gap posts: low-difficulty keywords mapped to Dooza
// products. Research and process: doc/blog-ai-discovery-playbook.md.
import openclawAlternatives from './openclaw-alternatives';
import hermesAgentVsOpenclaw from './hermes-agent-vs-openclaw';
import n8nAlternatives from './n8n-alternatives';
import aiReceptionistPricing from './ai-receptionist-pricing';
import virtualAssistantCost from './virtual-assistant-cost-small-business';
import doozaCrewVsManus from './dooza-crew-vs-manus';
import manusAlternatives from './manus-alternatives';
import aiAgentsThatAskForApproval from './ai-agents-that-ask-for-approval';
import gensparkAlternatives from './genspark-alternatives';
import doozaCrewVsGrokBot from './dooza-crew-vs-grok-bot';
import doozaCrewVsChatgptWork from './dooza-crew-vs-chatgpt-work';
import doozaCrewVsChatgptDots from './dooza-crew-vs-chatgpt-dots';
import chatgptDotsVsGrokBot from './chatgpt-dots-vs-grok-bot';
import doozaCrewVsGenspark from './dooza-crew-vs-genspark';
import chatgptDotsVsMetaMuse from './chatgpt-dots-vs-meta-muse';
import doozaCrewVsMetaMuse from './dooza-crew-vs-meta-muse';
import doozaCrewVsClaude from './dooza-crew-vs-claude';
import doozaCrewVsGeminiSpark from './dooza-crew-vs-gemini-spark';
import geminiSparkVsClaudeCowork from './gemini-spark-vs-claude-cowork';
import chatgptWorkVsClaudeCowork from './chatgpt-work-vs-claude-cowork';
import grokBotVsClaudeCowork from './grok-bot-vs-claude-cowork';
import geminiSparkVsChatgptWork from './gemini-spark-vs-chatgpt-work';
import metaMuseVsGeminiSpark from './meta-muse-vs-gemini-spark';
import gensparkVsManus from './genspark-vs-manus';
import manusVsClaudeCowork from './manus-vs-claude-cowork';
import gensparkVsClaudeCowork from './genspark-vs-claude-cowork';
import claudeCoworkVsCopilotCowork from './claude-cowork-vs-copilot-cowork';
import personalAiAgentUnder50 from './personal-ai-agent-under-50';
import accioWorkAlternatives from './accio-work-alternatives';
import lyzrAlternatives from './lyzr-alternatives';
import zapierAgentsAlternatives from './zapier-agents-alternatives';
import chatgptWorkAlternatives from './chatgpt-work-alternatives';
import claudeCoworkAlternatives from './claude-cowork-alternatives';
import crewaiAlternatives from './crewai-alternatives';
import gumloopAlternatives from './gumloop-alternatives';
import geminiEnterpriseAlternatives from './gemini-enterprise-alternatives';
import perplexityComputerAlternatives from './perplexity-computer-alternatives';
import polsiaAlternatives from './polsia-alternatives';
import hostingerAgentAlternatives from './hostinger-agent-alternatives';
import copilotCoworkAlternatives from './copilot-cowork-alternatives';
import bestAiToolsForInsuranceAgents from './best-ai-tools-for-insurance-agents';
import bestAiToolsForTruckDispatchers from './best-ai-tools-for-truck-dispatchers';
import bestAiToolsForAccountants from './best-ai-tools-for-accountants';
import bestAiToolsForLawFirms from './best-ai-tools-for-law-firms';
import bestAiToolsForTruckDrivers from './best-ai-tools-for-truck-drivers';
import bestAiToolsForRealEstateAgents from './best-ai-tools-for-real-estate-agents';
import bestAiToolsForPropertyManagers from './best-ai-tools-for-property-managers';
import bestAiToolsForMortgageBrokers from './best-ai-tools-for-mortgage-brokers';
import bestAiToolsForDentists from './best-ai-tools-for-dentists';
import bestAiToolsForMedicalClinics from './best-ai-tools-for-medical-clinics';
import bestAiToolsForHvacPlumbing from './best-ai-tools-for-hvac-plumbing';
import bestAiToolsForRoofers from './best-ai-tools-for-roofers';
import bestAiToolsForRecruiters from './best-ai-tools-for-recruiters';
import bestAiToolsForMarketingAgencies from './best-ai-tools-for-marketing-agencies';
import bestAiToolsForEcommerce from './best-ai-tools-for-ecommerce';
import bestAiToolsForRestaurants from './best-ai-tools-for-restaurants';
import bestAiToolsForSalons from './best-ai-tools-for-salons';
import bestAiToolsForCleaningBusinesses from './best-ai-tools-for-cleaning-businesses';
import bestAiToolsForConsultants from './best-ai-tools-for-consultants';
import bestAiToolsForNonprofits from './best-ai-tools-for-nonprofits';
import bestAiToolsForContractors from './best-ai-tools-for-contractors';
import bestAiToolsForLandscapers from './best-ai-tools-for-landscapers';
import bestAiToolsForAutoRepairShops from './best-ai-tools-for-auto-repair-shops';
import bestAiToolsForFreightBrokers from './best-ai-tools-for-freight-brokers';
import bestAiToolsForGyms from './best-ai-tools-for-gyms';
import bestAiToolsForVeterinarians from './best-ai-tools-for-veterinarians';
import bestAiToolsForPhotographers from './best-ai-tools-for-photographers';
import bestAiToolsForChiropractors from './best-ai-tools-for-chiropractors';
import bestAiToolsForEventPlanners from './best-ai-tools-for-event-planners';
import bestAiToolsForTravelAgents from './best-ai-tools-for-travel-agents';
import bestAiToolsForTutors from './best-ai-tools-for-tutors';
import bestAiToolsForPhysicalTherapists from './best-ai-tools-for-physical-therapists';
import bestAiToolsForPetGroomers from './best-ai-tools-for-pet-groomers';
import bestAiToolsForHomeInspectors from './best-ai-tools-for-home-inspectors';
import bestAiToolsForFlorists from './best-ai-tools-for-florists';
import bestAiToolsForPestControl from './best-ai-tools-for-pest-control';
import bestAiToolsForMovingCompanies from './best-ai-tools-for-moving-companies';
import bestAiToolsForDaycares from './best-ai-tools-for-daycares';
import bestAiToolsForMartialArtsStudios from './best-ai-tools-for-martial-arts-studios';
import bestAiToolsForElectricians from './best-ai-tools-for-electricians';
import bestAiToolsForInteriorDesigners from './best-ai-tools-for-interior-designers';
import bestAiToolsForHotels from './best-ai-tools-for-hotels';
import bestAiToolsForPoolService from './best-ai-tools-for-pool-service';
import bestAiToolsForPainters from './best-ai-tools-for-painters';
import bestAiToolsForWeddingPlanners from './best-ai-tools-for-wedding-planners';
import bestAiToolsForFuneralHomes from './best-ai-tools-for-funeral-homes';
import bestAiToolsForArchitects from './best-ai-tools-for-architects';
import bestAiToolsForAutoDetailers from './best-ai-tools-for-auto-detailers';
import bestAiToolsForBakeries from './best-ai-tools-for-bakeries';
import bestAiToolsForSolarInstallers from './best-ai-tools-for-solar-installers';
import bestAiToolsForDogTrainers from './best-ai-tools-for-dog-trainers';
import bestAiToolsForChurches from './best-ai-tools-for-churches';
import bestAiToolsForCarDealerships from './best-ai-tools-for-car-dealerships';
import bestAiToolsForYogaStudios from './best-ai-tools-for-yoga-studios';
import bestAiToolsForTattooStudios from './best-ai-tools-for-tattoo-studios';

export const octoberPosts = [
    claudeCoworkVsCopilotCowork,
    gensparkVsClaudeCowork,
    manusVsClaudeCowork,
    gensparkVsManus,
    metaMuseVsGeminiSpark,
    geminiSparkVsChatgptWork,
    grokBotVsClaudeCowork,
    chatgptWorkVsClaudeCowork,
    geminiSparkVsClaudeCowork,
    doozaCrewVsGeminiSpark,
    doozaCrewVsClaude,
    doozaCrewVsMetaMuse,
    chatgptDotsVsMetaMuse,
    doozaCrewVsGenspark,
    chatgptDotsVsGrokBot,
    doozaCrewVsChatgptDots,
    doozaCrewVsChatgptWork,
    doozaCrewVsGrokBot,
    doozaCrewVsManus,
    virtualAssistantCost,
    aiReceptionistPricing,
    openclawAlternatives,
    hermesAgentVsOpenclaw,
    n8nAlternatives,
    manusAlternatives,
    gensparkAlternatives,
    aiAgentsThatAskForApproval,
    personalAiAgentUnder50,
    accioWorkAlternatives,
    lyzrAlternatives,
    zapierAgentsAlternatives,
    chatgptWorkAlternatives,
    claudeCoworkAlternatives,
    crewaiAlternatives,
    gumloopAlternatives,
    geminiEnterpriseAlternatives,
    perplexityComputerAlternatives,
    copilotCoworkAlternatives,
    polsiaAlternatives,
    hostingerAgentAlternatives,
    bestAiToolsForInsuranceAgents,
    bestAiToolsForTruckDispatchers,
    bestAiToolsForAccountants,
    bestAiToolsForLawFirms,
    bestAiToolsForTruckDrivers,
    bestAiToolsForRealEstateAgents,
    bestAiToolsForPropertyManagers,
    bestAiToolsForMortgageBrokers,
    bestAiToolsForDentists,
    bestAiToolsForMedicalClinics,
    bestAiToolsForHvacPlumbing,
    bestAiToolsForRoofers,
    bestAiToolsForRecruiters,
    bestAiToolsForMarketingAgencies,
    bestAiToolsForEcommerce,
    bestAiToolsForRestaurants,
    bestAiToolsForSalons,
    bestAiToolsForCleaningBusinesses,
    bestAiToolsForConsultants,
    bestAiToolsForNonprofits,
    bestAiToolsForContractors,
    bestAiToolsForLandscapers,
    bestAiToolsForAutoRepairShops,
    bestAiToolsForFreightBrokers,
    bestAiToolsForGyms,
    bestAiToolsForVeterinarians,
    bestAiToolsForPhotographers,
    bestAiToolsForChiropractors,
    bestAiToolsForEventPlanners,
    bestAiToolsForTravelAgents,
    bestAiToolsForTutors,
    bestAiToolsForPhysicalTherapists,
    bestAiToolsForPetGroomers,
    bestAiToolsForHomeInspectors,
    bestAiToolsForFlorists,
    bestAiToolsForPestControl,
    bestAiToolsForMovingCompanies,
    bestAiToolsForDaycares,
    bestAiToolsForMartialArtsStudios,
    bestAiToolsForElectricians,
    bestAiToolsForInteriorDesigners,
    bestAiToolsForHotels,
    bestAiToolsForPoolService,
    bestAiToolsForPainters,
    bestAiToolsForWeddingPlanners,
    bestAiToolsForFuneralHomes,
    bestAiToolsForArchitects,
    bestAiToolsForAutoDetailers,
    bestAiToolsForBakeries,
    bestAiToolsForSolarInstallers,
    bestAiToolsForDogTrainers,
    bestAiToolsForChurches,
    bestAiToolsForCarDealerships,
    bestAiToolsForYogaStudios,
    bestAiToolsForTattooStudios,
];
